import axios from 'axios'
import useSWR from 'swr'
// import { useAuth } from '../contexts/auth'

export const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URL
import School from '../pages/api/School'
export default function useResource (user) {
  // const { user } = useAuth()
  let tokens
  if (typeof window !== "undefined") {
    tokens = JSON.parse(window.localStorage.getItem('tokens'))
  }

  const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResource)

  async function fetchResource (url) {
    if (!tokens) {
      return
    }

    try {
      let school = {
        academic_year: new Date().getFullYear().toString(),
        manager: user,
        schoolInfo: [],
        schoolTeachers: [],
        schoolEvaluations: [],
        academic_year: new Date().getFullYear().toString()
      }
      await axios.get(`${url}schools/`, config()).then(
        response => {
          let sc = []
          response.data.forEach((item) => {
            if (item.school_id == school.manager.sid) {
              sc.push(item)
            }
          })
          school.schoolInfo = sc

        }
      ).catch(err => console.log(err))

      await axios.get(`${url}teachers/`, config()).then(
        response => {
          let st = []
          response.data.forEach((item) => {
            if (item.school_id == school.manager.sid) {
              st.push(item)
            }
          })
          school.schoolTeachers = st
        }
      ).catch(err => console.log(err))

      await axios.get(`${url}evaluations/`, config()).then(
        response => {
          let schoolEvaluation = []
          response.data.forEach((item) => {
            if (
              item.school == school.manager.sid &&
              item.academic_year == school.academic_year
            ) {
              schoolEvaluation.push(item)
            }
          })
          school.schoolEvaluations = schoolEvaluation
        }
      ).catch(err => console.log(err))


      await axios.get(`${url}goals/`, config()).then(response => {
        const goals = []
        school.schoolEvaluations.forEach((eva) => {
          response.data.forEach((goal) => {
            if (eva.evaluation_id == goal.evaluation) {
              goals.push(goal)
            }
          })
          eva['goals'] = goals
        })
      }).catch(err => console.log(err))

      await axios.get(`${url}assesments/`, config()).then(response => {
        const assesments = []
        school.schoolEvaluations.forEach((eva) => {
          response.data.forEach((assesment) => {
            if (eva.evaluation_id == assesment.evaluation) {
              assesments.push(assesment)
            }
          })
          eva['assesments'] = assesments
        })
      }).catch(err => console.log(err))

      console.log('ress ->>>>', school)
      return school
    } catch (error) {
      handleError(error)
    }
  }

  // helper function to handle getting Authorization headers EXACTLY right
  function config () {
    return {
      headers: {
        'Authorization': 'Bearer ' + tokens.access
      }
    }
  }

  function handleError (error) {
    console.error(error)
    // currently just log out on error
    // but a common error will be short lived token expiring
    // STRETCH: refresh the access token when it has expired
    // logout()
  }

  return {
    resources: data,
    error,
    loading: tokens && !error && !data
  }
}

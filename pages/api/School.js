// 201 Basics :D
import axios from 'axios'
import { useAuth } from '../../contexts/auth'

const api_get = async (token, url) => {
  let jwt = token
  let config = {
    headers: { Authorization: 'Bearer ' + jwt },
    method: 'get',
    baseURL: process.env.NEXT_PUBLIC_RESOURCE_URL,
    url: `/${url}/?format=json`
  }
  const response = await axios(config).catch((error) =>
    console.log(error.message)
  )
  return response.data
}
// const api_post = async (token, url,id,data) => {
//   let jwt = token
//   let config = {
//     headers: { Authorization: 'Bearer ' + jwt },
//     method: 'get',
//     baseURL: process.env.NEXT_PUBLIC_RESOURCE_URL,
//     url: `/${url}/${id}`
//   }
//   const response = await axios(config).catch((error) =>
//     console.log(error.message)
//   )
//   return response.data
// }
export default class School {
  constructor(...user) {
    const { tokens } = useAuth()
    this.tokens = tokens
    this.manager = user[0]
    this.schoolInfo = []
    this.schoolTeachers = []
    this.schoolEvaluations = []
    this.academic_year = new Date().getFullYear().toString()
    this.getShool()
    this.getTeachers()
    this.getEvaluations()
    this.getAssesments()
    this.getGoals()
  }

  async getShool() {
    const schools = await api_get(this.tokens.access, 'schools')
    schools.forEach((item) => {
      if (item.school_id == this.manager.sid) {
        this.schoolInfo.push(item)
      }
    })
  }
  async getTeachers() {
    const teachers = await api_get(this.tokens.access, 'teachers')
    teachers.forEach((item) => {
      if (item.school_id == this.manager.sid) {
        this.schoolTeachers.push(item)
      }
    })
  }
  async getEvaluations() {
    const evaluations = await api_get(this.tokens.access, 'evaluations')
    evaluations.forEach((item) => {
      if (
        item.school == this.manager.sid &&
        item.academic_year == this.academic_year
      ) {
        this.schoolEvaluations.push(item)
      }
    })
  }
  async getAssesments() {
    const evaluations = await api_get(this.tokens.access, 'assesments')
    const assesments = []
    this.schoolEvaluations.forEach((eva) => {
      evaluations.forEach((assesment) => {
        if (eva.evaluation_id == assesment.evaluation) {
          //add each assesment to the eavaluation
          assesments.push(assesment)
        }
      })
      eva['assesments'] = assesments
    })
  }
  async getGoals() {
    const goals = []
    const response = await api_get(this.tokens.access, 'goals')
    this.schoolEvaluations.forEach((eva) => {
      response.forEach((goal) => {
        if (eva.evaluation_id == goal.evaluation) {
          goals.push(goal)
        }
      })
      eva['goals'] = goals
    })
  }
}

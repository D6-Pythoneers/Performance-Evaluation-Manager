// 201 Basics :D
import axios from 'axios'
import { useAuth } from '../../contexts/auth'
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

  getShool() {
    let jwt = this.tokens.access
    let config = {
      headers: { Authorization: 'Bearer ' + jwt },
      method: 'get',
      baseURL: process.env.NEXT_PUBLIC_RESOURCE_URL,
      url: '/schools/?format=json'
    }
    axios(config)
      .then((response) => {
        const schools = response.data
        schools.forEach((item) => {
          if (item.school_id == this.manager.sid) {
            this.schoolInfo.push(item)
          }
        })
      })
      .catch((error) => console.log(error.message))
  }
  getTeachers() {
    let jwt = this.tokens.access
    let config = {
      headers: { Authorization: 'Bearer ' + jwt },
      method: 'get',
      baseURL: process.env.NEXT_PUBLIC_RESOURCE_URL,
      url: '/teachers/?format=json'
    }
    axios(config)
      .then((response) => {
        const teachers = response.data
        teachers.forEach((item) => {
          if (item.school_id == this.manager.sid) {
            this.schoolTeachers.push(item)
          }
        })
      })
      .catch((error) => console.log(error.message))
  }
  getEvaluations() {
    let jwt = this.tokens.access
    let config = {
      headers: { Authorization: 'Bearer ' + jwt },
      method: 'get',
      baseURL: process.env.NEXT_PUBLIC_RESOURCE_URL,
      url: '/evaluations/?format=json'
    }
    axios(config)
      .then((response) => {
        const evaluations = response.data
        evaluations.forEach((item) => {
          if (
            item.school == this.manager.sid &&
            item.academic_year == this.academic_year
          ) {
            this.schoolEvaluations.push(item)
          }
        })
      })
      .catch((error) => console.log(error.message))
  }
  getAssesments() {
    let jwt = this.tokens.access
    let config = {
      headers: { Authorization: 'Bearer ' + jwt },
      method: 'get',
      baseURL: process.env.NEXT_PUBLIC_RESOURCE_URL,
      url: '/assesments/?format=json'
    }
    axios(config)
      .then((response) => {
        const assesments = []
        this.schoolEvaluations.forEach((eva) => {
          response.data.forEach((assesment) => {
            if (eva.evaluation_id == assesment.evaluation) {
              //add each assesment to the eavaluation
              assesments.push(assesment)
            }
          })
          eva['assesments'] = assesments
        })
      })

      .catch((error) => console.log(error.message))
  }
  getGoals() {
    let jwt = this.tokens.access
    let config = {
      headers: { Authorization: 'Bearer ' + jwt },
      method: 'get',
      baseURL: process.env.NEXT_PUBLIC_RESOURCE_URL,
      url: '/goals/?format=json'
    }
    axios(config)
      .then((response) => {
        const goals = []
        this.schoolEvaluations.forEach((eva) => {
          response.data.forEach((goal) => {
            if (eva.evaluation_id == goal.evaluation) {
              goals.push(goal)
            }
          })
          eva['goals'] = goals
        })
      })

      .catch((error) => console.log(error.message))
  }
}

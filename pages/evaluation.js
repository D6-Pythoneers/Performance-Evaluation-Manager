import EvalutionTable from "../components/evalutionTable"

import Swal from "sweetalert2";
export async function getServerSideProps (context) {
    console.log(context.query)

    //you can make DB queries using the data in context.query

    return {
        props: {
            user: JSON.parse(context.query.user),
            school: JSON.parse(context.query.school),
            evaluations: JSON.parse(context.query.evaluations)
        }
    }
}

export default function Evaluation (props) {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Evaluation is pending',
        showConfirmButton: false,
        timer: 1500
    })
    console.log(props.user)
    console.log(props.school)
    console.log(props.evaluations)
    return (<EvalutionTable user={props.user} school={props.school} evaluations={props.evaluations} />)
}
import './ListTeachingStaff.scss'
import CardTeachingStaff from '../CardTeachingStaff/CardTeachingStaff'

export default function ListTeachingStaff() {

    return(
        <div className="list-teaching-staff row">
            <CardTeachingStaff />
            <CardTeachingStaff />
            <CardTeachingStaff />
            <CardTeachingStaff />
            <CardTeachingStaff />
            <CardTeachingStaff />
        </div>
    )
}
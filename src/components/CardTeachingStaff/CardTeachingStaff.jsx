import './CardTeachingStaff.scss'
import Button from '~/components/Button/Button'

export default function CardTeachingStaff() {

    return(
        <div className="card-teaching-staff col l-4 m-6 c-12">
            <div className="card-teaching-staff__image">
                <img src="https://via.placeholder.com/150" alt="Avatar"/>
            </div>
            <div className="card-teaching-staff__info">
                <h3 className="card-teaching-staff__name">John Doe</h3>
                <p className="card-teaching-staff__position">Professor</p>
                <p className="card-teaching-staff__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
                <Button>View Profile</Button>
            </div>
        </div>
    )
}
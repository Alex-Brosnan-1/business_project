import './Products.css'
import './index.css'

function Products()
{
    return (
        <div className="container">
            <div className="scheduler">
                <h1 className="scheduler_title">Volunteer Form</h1>
                <div className="scheduler_contents">
                    <div className="left">
                        <div className="scheduler_inputs">
                            <div className="scheduler_input">
                                <h3>Full Name</h3>
                                <input className="scheduler_input_name" type="text" onChange={(e) => {
                                    e.target.value = e.target.value;
                                }}/>
                            </div>
                            <div className="scheduler_input">
                                <h3>Email</h3>
                                <input className="scheduler_input_email" type="text" onChange={(e) => {
                                    e.target.value = e.target.value;
                                }}/>
                            </div>
                            <div className="scheduler_input">
                                <h3>Volunteer Date</h3>
                                <input className="scheduler_input_date" type="date" onChange={(e) => {
                                    e.target.value = e.target.value;
                                }}/>
                            </div>
                        </div>
                        <div className="scheduler_options">
                            <button className="scheduler_options_submit">Submit Form</button>
                            <button className="scheduler_options_cancel">Cancel</button>
                        </div>
                    </div>
                    <div className="right">
                        <h3 className="right_title">Scheduled</h3>
                        <div className="appointments">
                            <Appointment name="Name" email="email@gmail.com" month={11} day={13} />
                            <Appointment name="Name" email="email@gmail.com" month={3} day={25} />
                            <Appointment name="Name" email="email@gmail.com" month={7} day={5} />
                            <Appointment name="Name" email="email@gmail.com" month={11} day={26} />
                            <Appointment name="Name" email="email@gmail.com" month={11} day={26} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

function Appointment({ name, email, month, day }:{ name: string, email: string, month: number, day: number })
{
    return (
        <div className="appointment">
            <div className="appointment_contact">
                <h4 className="appointment_name">{name}</h4>
                <h4 className="appointment_email">{email}</h4>
            </div>
            <h3 className="appointment_date">{month} / {day}</h3>
        </div>
    )
}

export default Products;
import './Products.css'
import './index.css'

function Products()
{
    return (
        <div className="scheduler">
            <h1 className="scheduler_title">Volunteer Form</h1>
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

    )
}

export default Products;
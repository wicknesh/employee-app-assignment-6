const Edit = () => {
  return (
    <div className="container">
        <div className="col-md-12 p-5">
            <form>

                <input
                    type="text"
                    className="mt-5 form-control p-3 border-input"
                    id="UpdateName"
                    name="UpdateName"
                    placeholder="Name"
                />
                <input
                    type="text"
                    className="mt-5 form-control p-3 border-input"
                    id="UpdateUsername"
                    name="UpdateUsername"
                    placeholder="Username"
                />
                <input
                    type="text"
                    className="mt-5 form-control p-3 border-input"
                    id="UpdateEmail"
                    name="UpdateEmail"
                    placeholder="Email"
                />

                <input
                    type="password"
                    className="mt-5 form-control p-3 border-input"
                    id="UpdatePassword"
                    name="UpdatePassword"
                    placeholder="Password"
                />

                <button
                    type="submit"
                    className="btn btn-lg w-100 mt-5 btn-primary"
                >
                    Update
                </button>
            </form>
        </div>
    </div>
  )
}

export default Edit
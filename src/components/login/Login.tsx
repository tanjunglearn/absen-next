const Login = () => {
  return (
    <section className="flex justify-center items-center h-screen w-screen">
      <div className="h-80 w-80 bg-blue-100 p-5 rounded-md">
        <form>
          <div id="field:username">
            <div>
              <label>Username</label>
            </div>
            <div className="mt-2">
              <input placeholder="Type username here..." className="w-full p-3 rounded-md" />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login

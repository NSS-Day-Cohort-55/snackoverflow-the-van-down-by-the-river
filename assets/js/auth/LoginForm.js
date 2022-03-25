export const LoginForm = () => {
  
	return `
  <div>
		<h3>Login</h3>
		<div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Name</span>
      </div>
        <input type="text" class="form-control" aria-label="Default" 
          aria-describedby="inputGroup-sizing-default"
          value=""
          name="name"
          type="text"
          id="login_name"
           />
    </div>
    <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Email</span>
        </div>
        <input type="text" class="form-control" aria-label="Default" 
         aria-describedby="inputGroup-sizing-default"
          value=""
          name="email"
          type="text"
          id="login_email"
          placeholder="name@place.com" />
    </div>
    <div class="input-group input-group-sm mb-3">
         <button type="button" class="btn btn-primary" id="login__submit">Login</button>
    </div>
    </div>
  
	`
}
<script>
  import { enhance } from "$app/forms";

  export let data;
</script>

<h1>Hi, {data.user.name}!</h1>
<h3>Email: {data.user.email}!</h3>
<h6>GoogleId: {data.user.googleId}!</h6>
<p>Your user ID is {data.user.id}.</p>
<form method="post" use:enhance>
  <button>Sign out</button>
</form>

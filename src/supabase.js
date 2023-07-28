const s = supabase.createClient('https://blunder.letz.dev/proxy', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICAgInJvbGUiOiAiYW5vbiIsCiAgICAiaXNzIjogInN1cGFiYXNlIiwKICAgICJpYXQiOiAxNjg5NDgzNjAwLAogICAgImV4cCI6IDE4NDczMzY0MDAKfQ.FktL6yEOOVd3lgtNoxFMAGLxhsNHfR7UPmGoiMrgDWo');

uuid = '';

async function getLocalUser() {
  const { data: { user } } = await s.auth.getUser();
  console.log(user);
  if (user) {
    uuid = user.id;
    editCSS(".avatar", "background-image", `url(${user["user_metadata"]["avatar_url"]})`);
    let username = await getUsername(uuid);
    document.querySelector(".tag").innerHTML = username;
    document.getElementById("username").value = username;
    document.querySelector('.user').classList.remove("hidden");
  } else {
    document.querySelector('.reg').classList.remove("hidden");
  }
  document.querySelector('.loading').classList.add("hidden");
  return user;
}

async function getUsername(id = uuid) {
  const { data, error } = await s
    .from('usernames')
    .select("username")
    .eq('id', id);
  return data[0]["username"];
}

async function checkUsername(username) {
  const { data, error } = await s
    .from('usernames')
    .select("username")
    .eq('username', username);
  return data.length == 0;
}

async function signUpWithEmail(_email, _password) {
  const { data, error } = await s.auth.signUp({
    email: _email,
    password: _password,
  });
  console.log(data, error);
}

async function oAuthSignIn(service) {
  if (await getLocalUser()) return;

  const { data, error } = await s.auth.signInWithOAuth({
    provider: service
  });
  console.log(data, error);
}

async function signOut() {
  const { error } = await s.auth.signOut();
  window.location.reload();
}

getLocalUser();
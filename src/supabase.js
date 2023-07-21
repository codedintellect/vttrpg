const s = supabase.createClient('https://blunder.letz.dev/proxy', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICAgInJvbGUiOiAiYW5vbiIsCiAgICAiaXNzIjogInN1cGFiYXNlIiwKICAgICJpYXQiOiAxNjg5NDgzNjAwLAogICAgImV4cCI6IDE4NDczMzY0MDAKfQ.FktL6yEOOVd3lgtNoxFMAGLxhsNHfR7UPmGoiMrgDWo');

async function getLocalUser() {
  const { data: { user } } = await s.auth.getUser();
  console.log(user);
  if (user) {
    window["eCSS"](".avatar", "background-image", `url(${user["user_metadata"]["avatar_url"]})`);
    document.querySelector('.user').classList.remove("hidden");
  } else {
    document.querySelector('.reg').classList.remove("hidden");
  }
  document.querySelector('.loading').classList.add("hidden");
  return user;
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
}

getLocalUser();
import { ii_client_sample as AnonymousIiClientSample,createActor as createIiClientSampleBaseActor, canisterId as iiClientSampleCanisterId } from "../../declarations/ii_client_sample";
import { AuthClient } from '@dfinity/auth-client';

let globalAuthClient = null;

async function getAuthClient() {
  if (getAuthClient == null){
    globalAuthClient = await AuthClient.create();
  }
  return globalAuthClient;
}

async function getActor() {
  let authClient = await getAuthClient();
  
  let iiClientSampleActor = null;
  if(authClient?.getIdentity() == null){
    iiClientSampleActor = AnonymousIiClientSample;
  }else{
   //認証済み情報でActorを作成する。
   iiClientSampleActor = createIiClientSampleBaseActor(iiClientSampleCanisterId, {
      agentOptions: {
        identity: authClient?.getIdentity() ,
      },
    }); 
  }
  return iiClientSampleActor;
}

document.querySelector("#login").addEventListener("click", async (e) => {
  let authClient = await AuthClient.create();
  await authClient?.login({
    identityProvider: "http://localhost:8080/#authorize",
    onSuccess: async () => {
      document.getElementById("is-authenticated").value = await authClient.isAuthenticated();
      document.getElementById("principal-id").value = authClient.getIdentity().getPrincipal().toString();
      globalAuthClient = authClient;
    },onError: async () =>{
      console.log('login error');
    }
  });
});


document.querySelector("#call").addEventListener("click", async (e) => {
  let iiClientSampleActor = await getActor();
  const myPrincipal = await iiClientSampleActor.get_my_principal();
  document.getElementById("recived-principal-id").value = myPrincipal.principal_id;
  document.getElementById("recived-is-authenticated").value = myPrincipal.is_authenticated;
});


document.querySelector("#call").addEventListener("click", async (e) => {
  let iiClientSampleActor = await getActor();
  const myPrincipal = await iiClientSampleActor.get_my_principal();
  document.getElementById("recived-principal-id").value = myPrincipal.principal_id;
  document.getElementById("recived-is-authenticated").value = myPrincipal.is_authenticated;
});


document.querySelector("#logout").addEventListener("click", async (e) => {
  let authClient = await getAuthClient();
  if(authClient != null){
    await authClient.logout();
  }
  document.getElementById("is-authenticated").value = "";
  document.getElementById("principal-id").value = "";
  document.getElementById("recived-principal-id").value = "";
  document.getElementById("recived-is-authenticated").value = "";
});

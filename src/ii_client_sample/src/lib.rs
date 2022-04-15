use ic_cdk::{caller};
use ic_cdk_macros::*;
use ic_cdk::export::candid::*;

#[derive(Clone, Debug, Default, CandidType)]
struct MyPrincipal {
    pub principal_id: String,
    pub is_authenticated: bool,
}

#[query]
fn get_my_principal() -> MyPrincipal {
    MyPrincipal{
        principal_id: caller().to_text(),
        is_authenticated: caller().to_text() != "2vxsx-fae",
    }
}


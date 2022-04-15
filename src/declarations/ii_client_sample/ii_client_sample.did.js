export const idlFactory = ({ IDL }) => {
  const MyPrincipal = IDL.Record({
    'is_authenticated' : IDL.Bool,
    'principal_id' : IDL.Text,
  });
  return IDL.Service({
    'get_my_principal' : IDL.Func([], [MyPrincipal], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };

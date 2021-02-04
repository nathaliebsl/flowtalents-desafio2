// import { Button, TextField } from "@material-ui/core";
// import React, { useState, useContext } from "react";
// import ValidacoesCadastro from "../../context/ValidacoesCadastro";
// import useErros from "../../hooks/useErros"

// function FormularioContato({ aoEnviar }) {
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");
//   const validacoes = useContext(ValidacoesCadastro);
//   const [erros, validarCampos, possoEnviar] = useErros(validacoes);

//   return (
//     <form
//       onSubmit={(event) => {
//         event.preventDefault();
//         if (possoEnviar()) {
//           aoEnviar({ email, senha });
//         }
//       }}
//     >
//       <TextField
//         value={email}
//         onChange={(event) => {
//           setEmail(event.target.value);
//         }}
//         required
//         name="email"
//         autoComplete="username"
//         id="email"
//         label="e-mail"
//         type="email"
//         variant="outlined"
//         margin="normal"
//         fullWidth
//       />
//       <TextField
//         value={senha}
//         onChange={(event) => {
//           setSenha(event.target.value);
//         }}
//         onBlur={validarCampos}
//         error={!erros.senha.valido}
//         helperText={erros.senha.texto}
//         required
//         name="senha"
//         autoComplete="current-password"
//         id="senha"
//         label="senha"
//         type="password"
//         variant="outlined"
//         margin="normal"
//         fullWidth
//       />
//       <Button type="submit" variant="contained" color="secondary">
//         Próximo
//       </Button>
//     </form>
//   );
// }

// export default FormularioContato;
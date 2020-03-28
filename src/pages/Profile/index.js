import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const handleSubmit = data => {
    dispatch(updateProfileRequest(data));
  };

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu endereço de e-mail" type="email" />

        <hr />

        <Input
          name="oldPassword"
          placeholder="Sua senha atual"
          type="password"
        />
        <Input name="password" placeholder="Nova senha" type="password" />
        <Input
          name="confirmPassword"
          placeholder="Confirmação de senha"
          type=""
        />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}

"use client";
import { Container, Title, ButtonSection } from '@/styles/pages/home';
import { LinkButton } from '@/domains/home/components';

export default async function Index() {
  return (
    <Container>
      <Title>
        Turing <span>Machine</span> Game
      </Title>
      <ButtonSection>
        <LinkButton color="lightBlue" url="/game">Start</LinkButton>
        <LinkButton color="yellow" url="/settings">Settings</LinkButton>
      </ButtonSection>
    </Container>
  );
}

// cypress/component/auth-links-spec.tsx
import { signOut, useSession, signIn } from "next-auth/react";

import AuthLinks from "@/app/components/auth-links/AuthLinks";

import React from "react";

describe("AuthLinks Component", () => {
  beforeEach(() => {});
  it("renders authentication links for logged-out user", () => {
    cy.mount(<AuthLinks />);

    cy.get("[data-testId= loginLink").should("exist");
  });

  // Add more tests as needed for your specific AuthLinks component functionality
});

import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />)
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />)
    const firstName = screen.getByLabelText('First Name:')
    userEvent.type(firstName, 'Ari')

    const lastName = screen.getByLabelText('Last Name:')
    userEvent.type(lastName, 'Arias')

    const address = screen.getByLabelText('Address:')
    userEvent.type(address, '123 street 456 N')

    const city = screen.getByLabelText('City:')
    userEvent.type(city, 'here')

    const state = screen.getByLabelText('State:')
    userEvent.type(state, 'there')

    const zip = screen.getByLabelText('Zip:')
    userEvent.type(zip, '12345')

    const submit = screen.getByTestId('submit')
    userEvent.click(submit)
    
    expect(screen.getByTestId('successMessage'))
});

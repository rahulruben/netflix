import React from 'react';
import faqsData from '../fixtures/faq.json';
import { Accordion, OptForm } from '../components';

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map(faq => (
                <Accordion.Item key={faq.id}>
                    <Accordion.Header>{faq.header}</Accordion.Header>
                    <Accordion.Body>{faq.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            <OptForm>
                <OptForm.Text>Ready to watch? Enter your email to create or restart you membership</OptForm.Text>
                <OptForm.Break />
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>Try it now</OptForm.Button>
            </OptForm>
        </Accordion>
    )
}
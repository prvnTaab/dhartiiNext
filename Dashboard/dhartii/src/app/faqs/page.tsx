
'use client'
import Accordion from 'react-bootstrap/Accordion';
import { faqData } from '../constent/content';
import './faq.css'

function faq() {
    return (
        <main className="main-content inner-pages">
            <section className="faqs-section py-5">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="faq-container">
                                <h5 className="text-black text-uppercase fw600 mb-3">Faq</h5>

                                <Accordion defaultActiveKey="0">
                                    {faqData.map((item: any) => (
                                        <Accordion.Item key={item.id} eventKey={item.id} >
                                            <Accordion.Header>{item.title}</Accordion.Header>
                                            <Accordion.Body>
                                                {item.subTitle}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default faq
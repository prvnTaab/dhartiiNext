import { ShippingPolicyData } from '../constent/content'

function ShippingPolicy() {
    return (
        <main className="main-content inner-content">
            <div className="container-fluid">
                <div className="row">
                    <article>
                        <h3 className="mb-3" />
                        <p />
                        <div className="container">
                            <h5 className="text-black fw600 mb-3">{ShippingPolicyData.title}</h5>
                            {ShippingPolicyData.content.map((item: any, index: number) => {
                                if (item.type === 'paragraph') {
                                    return (
                                        <div key={index}>
                                            {item.title && <p><strong>{item.title}</strong></p>}
                                            <p>{item.text}</p>
                                        </div>
                                    );
                                }
                                if (item.type === 'list') {
                                    return (<div key={index} className=''>
                                        {item.title && <p><strong>{item.title}</strong></p>}
                                        <ul>
                                            {item.listItems.map((listItem: any, idx: number) => (
                                                <li key={idx}>{listItem}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    );
                                }
                            })}
                        </div>
                    </article>
                </div>
            </div>
        </main>

    )
}

export default ShippingPolicy
import { termsAndCondition } from '../constent/content'

export const TermsAndCondition = () => {
  return (
    <main className="main-content inner-pages">
      <section className="textual-content-section py-5">
        <div className="container-xl">
          <div className="textual-content-wrap">
            <h4>{termsAndCondition.title}</h4>
            {termsAndCondition.content.map((item: any, index: number) => {
              if (item.type === 'paragraph') {
                return (
                  <div key={index}>
                    {item.title && <p><strong>{item.title}</strong></p>}
                    <p>{item.text}</p>
                  </div>
                );
              }
              if (item.type === 'list') {
                return (
                  <ul key={index}>
                    {item.listItems.map((listItem: any, idx: number) => (
                      <li key={idx}>{listItem}</li>
                    ))}
                  </ul>
                );
              }
            })}
          </div>
        </div>
      </section>
    </main>

  )
}

export default TermsAndCondition;
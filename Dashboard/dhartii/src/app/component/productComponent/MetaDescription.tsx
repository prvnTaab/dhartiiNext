'use client'
import Accordion from 'react-bootstrap/Accordion';

function MetaDescription() {
  return (
    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0" style={{marginBottom:'20px'}}>
      <Accordion.Header>PRODUCT DESCRIPTION</Accordion.Header>
      <Accordion.Body>
      <div className="card-body" style={{ padding: "15px !important" }}>
              <ul>
                <li>
                  <strong>Brand Name</strong> – Mushio
                </li>
                <li>
                  <strong>Product Details</strong> – This beautiful A-line
                  stripe zari kurta is the perfect example of beauty and
                  simplicity. Made in the most soothing shade of blue it
                  features a round neck with a keyhole accentuated with an
                  embellished potli button. Sleeves are three-quarter with
                  stunning tassel tie-up at the hem. The kurta comes with an
                  attached lining.
                </li>
                <li>
                  <strong>Material/Colo</strong>r – Zari stripe / Blue
                </li>
                <li>
                  <strong>Size&nbsp;</strong> –&nbsp; S, M, L, XL. XXL
                </li>
                <li>
                  <strong>Care Instruction</strong> –{" "}
                  <span
                    data-sheets-root={1}
                    data-sheets-value='{"1":2,"2":"DRY CLEAN ONLY"}'
                    data-sheets-userformat='{"2":63,"3":{"1":0,"3":1},"4":{"1":2,"2":16773836},"5":{"1":[{"1":2,"2":0,"5":{"1":2,"2":0}},{"1":0,"2":0,"3":3},{"1":1,"2":0,"4":1}]},"6":{"1":[{"1":2,"2":0,"5":{"1":2,"2":0}},{"1":0,"2":0,"3":3},{"1":1,"2":0,"4":1}]},"7":{"1":[{"1":2,"2":0,"5":{"1":2,"2":0}},{"1":0,"2":0,"3":3},{"1":1,"2":0,"4":1}]},"8":{"1":[{"1":2,"2":0,"5":{"1":2,"2":0}},{"1":0,"2":0,"3":3},{"1":1,"2":0,"4":1}]}}'
                  >
                    Dry Clean Only
                  </span>
                </li>
              </ul>
            </div>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>SIZE CHART</Accordion.Header>
      <Accordion.Body>
      <img role="presentation" alt="" src="https://dhartii.in/wp-content/uploads/2024/03/591934E1-C031-43B7-A168-425C0996E94E.jpeg" width={'auto'} height={500} />
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  )
}

export default MetaDescription
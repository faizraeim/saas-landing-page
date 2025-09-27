import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaqPageData } from '../data/data'
import { RiArrowDownSLine, RiArrowRightSLine, RiQuestionFill } from '@remixicon/react'

const Faq = () => {
  const [openFaqId, setOpenFaqId] = React.useState(null);

  const handleToggle = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <>
      <Header />
      <section className='faq section-padding my-20 lg:w-3/4 m-auto'>
        <div className="container m-auto p-20">
          <div className="section-header text-start text-5xl font-sans bg-primary/16 inline-block px-5 py-8 w-full rounded-lg mb-10 relative">
            <h2 className='w-sm leading-tight'>{FaqPageData[0].title}</h2>
            <RiQuestionFill size={120} className=' absolute text-primary right-0 bottom-0'/>
          </div>
          <div className="faq-content">
            {FaqPageData[0].faqs.map((faq) => (
              <div className="faq-item" key={faq.id}>
                <div
                  className="faq-question shadow-sm rounded-md bg-secondary/5 my-4 flex justify-between items-center px-5 py-4 cursor-pointer"
                  onClick={() => handleToggle(faq.id)}
                >
                  <h3>{faq.question}</h3>
                  <span className="faq-icon"></span>
                    {openFaqId === faq.id ? <RiArrowDownSLine /> : <RiArrowRightSLine />}
                </div>
                {openFaqId === faq.id && (
                  <div className="faq-answer my-10 px-5">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Faq

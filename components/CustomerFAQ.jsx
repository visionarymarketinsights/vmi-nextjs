import React, { Component } from 'react'

export default class CustomerFAQ extends Component {
    render() {
        return (
            <div>
                <div className='mb-4'>
                    <div className='font-semibold '>
                        What type of sources & methodology do you use?
                    </div>
                    <div>
                        We use data from the demand & supply side and paid databases. All the sources and methodology used for market estimation and forecasting are mentioned in the report.
                    </div>
                </div>

                <div className='mb-4'>
                    <div className='font-semibold '>
                        Do you provide customization of reports? Can we Purchase only specific section of report?
                    </div>
                    <div>
                        We do provide customization in report. It will be charged based on the scope of customization. Yes, you can purchase specific section of report also.
                    </div>
                </div>

                <div className='mb-4'>
                    <div className='font-semibold '>
                        Can I get data for particular Country?
                    </div>
                    <div>
                        Yes, we provide data for a particular country in our reports as well as customized formats. In our reports, we cover major countries and regions. However, if there is a requirement for a specific region, we shall provide country wise report also.
                    </div>
                </div>

                <div className='mb-4'>
                    <div className='font-semibold '>
                        Do you offer post-sales support?
                    </div>
                    <div>
                        Yes, we do offer 48 working hours of analyst support to solve your queries.
                    </div>
                </div>
            </div>
        )
    }
}

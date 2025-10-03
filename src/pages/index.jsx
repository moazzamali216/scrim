

import Plans from '../components/plan.jsx';
import PlanGrid from '../components/plangrid.jsx';
import Subscription from '../components/subscription.jsx';  
function Index() {
  const features = [
    "Unlimited active watches",
    "WhatsApp & Email notifications",
    "Advanced filtering options",
    "10,000 scans per month",
    "Priority customer support",
    "Historical data access",
  ];

  return (
    <>

        <Plans />
      <PlanGrid/>
      <Subscription/>
 

    </>
  )
}

export default Index

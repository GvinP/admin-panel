import './widgetLarge.css'

export const WidgetLarge = () => {

  const Button = ({type}: {type: string}) => {
    return <button className={`widgetLargeButton ${type}`}>{type}</button>
  }
  return (
    <div className='widgetLarge'>
      <h3 className="widgetLargeTitle">Latest Transactions</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargeTh">Customer</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Amount</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGHYVVKPQzRQfHwmgtUJR7Z9f2f3L7sNtchA&usqp=CAU" alt="" className="widgetLargeImage" />
            <span className="widgetLargeUsername">Katara</span>
          </td>
          <td className="widgetLargeDate">12 Sep 2022</td>
          <td className="widgetLargeAmount">$ 134.00</td>
          <td className="widgetLargeStatus"><Button type='Approved'/></td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGHYVVKPQzRQfHwmgtUJR7Z9f2f3L7sNtchA&usqp=CAU" alt="" className="widgetLargeImage" />
            <span className="widgetLargeUsername">Katara</span>
          </td>
          <td className="widgetLargeDate">12 Sep 2022</td>
          <td className="widgetLargeAmount">$ 134.00</td>
          <td className="widgetLargeStatus"><Button type='Decliend'/></td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGHYVVKPQzRQfHwmgtUJR7Z9f2f3L7sNtchA&usqp=CAU" alt="" className="widgetLargeImage" />
            <span className="widgetLargeUsername">Katara</span>
          </td>
          <td className="widgetLargeDate">12 Sep 2022</td>
          <td className="widgetLargeAmount">$ 134.00</td>
          <td className="widgetLargeStatus"><Button type='Pending'/></td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGHYVVKPQzRQfHwmgtUJR7Z9f2f3L7sNtchA&usqp=CAU" alt="" className="widgetLargeImage" />
            <span className="widgetLargeUsername">Katara</span>
          </td>
          <td className="widgetLargeDate">12 Sep 2022</td>
          <td className="widgetLargeAmount">$ 134.00</td>
          <td className="widgetLargeStatus"><Button type='Approved'/></td>
        </tr>
      </table>
    </div>
  )
}

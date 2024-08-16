import useToken from "../hooks/useToken"
import { TiShoppingCart } from "react-icons/ti";

export default function Order() {
  const { data, pending } = useToken('order/all')

  const encours = data?.filter( dat => dat.status == 'en cours')
  const annulé = data?.filter( dat => dat.status == 'annulé')
  const validé = data?.filter( dat => dat.status == 'validé')
  return (
    <div className="overflow-x-auto">
      <div className="text-3xl mb-10 flex items-center space-x-3 font-bold"><TiShoppingCart className="text-2xl mr-3 text-orange-600" />commande</div>
      <div role="tablist" class="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="en cours" />
        <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <table className="table table-lg ">
            <thead>
              <tr className="">
                <th>Name</th>
                <th>email</th>
                <th>order date</th>
                <th>validation date</th>
                <th>status</th>
                <th>image</th>

              </tr>
            </thead>
            <tbody>
              {data ? (encours?.map(el => (
                <tr className="hover:bg-slate-200 text-sm">
                  <td className="text-sm">{el.clientName}</td>
                  <td className="text-sm">{el.clientEmail}</td>
                  <td className="text-sm">{el.orderDate}</td>
                  <td className="text-sm">{el.effectiveDate}</td>
                  <td className="text-sm"><span className="loading loading-dots loading-md"></span></td>
                  <td ><img src={el.clientImageUrl} alt="" className="w-10 h-10 rounded-full" /></td>
                </tr>
              ))) : <span className="loading loading-spinner loading-lg"></span>}




            </tbody>

          </table>
        </div>

        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="livré" checked />
        <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <table className="table table-lg">
            <thead>
              <tr className="">
                <th>Name</th>
                <th>email</th>
                <th>order date</th>
                <th>validation date</th>
                <th>status</th>
                <th>image</th>

              </tr>
            </thead>
            <tbody>
              {validé?.map(el => (
                <tr className="hover:bg-slate-200 text-sm">
                  <td className="text-sm">{el.clientName}</td>
                  <td className="text-sm">{el.clientEmail}</td>
                  <td className="text-sm">{el.orderDate}</td>
                  <td className="text-sm">{el.effectiveDate}</td>
                  <td className="text-sm"><span className="loading loading-dots loading-md"></span></td>
                  <td ><img src={el.clientImageUrl} alt="" className="w-10 h-10 rounded-full" /></td>
                </tr>
              ))}




            </tbody>

          </table>
        </div>

        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="annulé" />
        <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <table className="table table-lg ">
            <thead>
              <tr className="">
                <th>Name</th>
                <th>email</th>
                <th>order date</th>
                <th>validation date</th>
                <th>status</th>
                <th>image</th>

              </tr>
            </thead>
            <tbody>
              {annulé?.map(el => (
                <tr className="hover:bg-slate-200 text-sm">
                  <td className="text-sm">{el.clientName}</td>
                  <td className="text-sm">{el.clientEmail}</td>
                  <td className="text-sm">{el.orderDate}</td>
                  <td className="text-sm">{el.effectiveDate}</td>
                  <td className="text-sm"><span className="loading loading-dots loading-md"></span></td>
                  <td ><img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="w-10 h-10 rounded-full" /></td>
                </tr>
              ))}




            </tbody>

          </table>
        </div>
      </div>

    </div>
  )
}

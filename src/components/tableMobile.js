export default function tableMobile({data}){
    return(
        <>
            {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.agreementChecked ? "Yes" : "No"}</td>
              <td>{item.selectedDate}</td>
              <td className="btns">
                <button onClick={() => handleEdit(item.id)}>
                  <MdModeEdit />
                </button>
                <button onClick={() => handleDelete(item.id)}>
                  <MdDelete />
                </button>
              </td>
            </tr>
        ))}
        </>
    )
}
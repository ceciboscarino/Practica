




interface data {
    data: string
}




export default function User({ data }: data) {




    return (
        <div>


            <label >{data}</label><br></br>


            <input type="text" name={data} />
        </div>



    )
}
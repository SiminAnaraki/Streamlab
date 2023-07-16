export default function SubFooter(props){
        return props.info.map(function(link,i){
            return (
            <li key={i}>
                <a href="">
                    <p>{link}</p>
                </a>
            </li>
         )
      })
        }
     


import React, { useEffect } from "react";
import MenuItem from "./MenuItem";
import { Data } from "../datas/Data";


function Menu() {
  return (
    <div className="grid md:grid-cols-4 justify-items-center  m-10 ">
        {
            Data.map((menuItem, key)=> 
            {
                return <MenuItem key={key} name={menuItem.name} image={menuItem.image} description={menuItem.description} />
            } )
        }
     
    </div>
  );
}

export default Menu;

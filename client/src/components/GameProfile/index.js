import React from "react";
import {Link} from "react-router-dom";

function GameProfile(item){
    const{ name, image, category, rating, dateReleased}

    return(
        <div class="card ml-5  mt-5 p-3" style="width: 18rem;">
            <div class="card-header rounded-top">
              <h2 class="text-center">{Featured}</h2>
            </div>
            <img
              class="card-img-top"
              src={"https://placekitten.com/200/200"}
              alt="Card image cap"
            />
            <div class="card-body">
              <p class="card-text text-center"> Game Category: {category}</p>
              <p class="card-text text-center">Game Rating: {rating}</p>
              <p class="card-text text-center">Release Date: {relase}</p>
            </div>
          </div>
    )
}
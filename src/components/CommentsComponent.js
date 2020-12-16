import React, {Component} from 'react';

function RenderComments({dish})
{
    return(
        dish.comments.map((dish) => {
            return(
                <div key={dish.id}>
                    <p>
                        {dish.comment}
                    </p>
                    <p>
                       -- {dish.author}
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(dish.date)))}
                    </p>
                </div>
            );
        })
    );
}


const Comment = (props) => {
    const cmt = props.dish.map((dish) => {
        return(
            <RenderComments dish={dish}/>
        );
    });

    return(
        cmt
    );
}   

export default Comment;
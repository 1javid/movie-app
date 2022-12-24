// import React, { useEffect } from 'react';

// export default function Email(props) {

//     useEffect(() => {
//         let url = `http://localhost:3000/messages`;

//         axios.post(url, {
//             email: { props.email },
//             subject: { props.subject },
//             content: { props.content }
//         })
//             .then(function (response) {
//                 console.log(response);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })

//     }, [])
// }
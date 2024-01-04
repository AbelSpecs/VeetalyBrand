



const postCheckoutPaypal = async(paypalOrder: any): Promise<any> => {
    console.log(paypalOrder);
    
    try {
        const response = await fetch('http://localhost:8080/api/orders', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paypalOrder)
        });
        const res = await response.json();
        return res.result.id;
        // console.log(res);
    } catch (error: any) {
        console.log('error');
        throw new Error(error)
    }
}


export { postCheckoutPaypal }
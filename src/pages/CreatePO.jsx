import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

function CreatePO() {
    const [formData, setFormData] = useState({
        vendorID: '',
        currency: 'USD',
        items: [{
            price: 0,
            itemCategory: '',
            material: '',
            quantity: 0,
            plant: '',
            accountAssignmentCategory: '',
            unitOfMeasurement: ''
        }],
        status: ['pending'],
        deliveryAddress: ''
    });

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        if (index !== undefined) {
            const newItems = [...formData.items];
            newItems[index][name] = value;
            setFormData({ ...formData, items: newItems });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleAddItem = () => {
        setFormData({
            ...formData,
            items: [
                ...formData.items,
                {
                    price: 0,
                    itemCategory: '',
                    material: '',
                    quantity: 0,
                    plant: '',
                    accountAssignmentCategory: '',
                    unitOfMeasurement: ''
                }
            ]
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://kkxerphvxf.execute-api.ap-south-1.amazonaws.com/dev/api/purchaseOrder/addPurchaseOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Handle success
                console.log('Form submitted successfully!');
            } else {
                // Handle errors
                console.error('Error submitting form.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>

            <main style={{ backgroundColor: "#80"}}>
                <div className='flex' style={{ backgroundColor: "#80"}}>
        <Sidebar />
                    <section className="dashboard_wrapper" style={{ width: "80%", backgroundColor: "#80"}}>
        <Navbar />
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <div className="p-fluid formgrid grid">
                    <div className="field col-12 md:col-6">
                        <label htmlFor="vendorID">Vendor</label>
                        <InputText id="vendorID" type="text" value={formData.vendorID} onChange={(e) => handleChange(e)} name="vendorID" />
                    </div>

                    {/* Other fields */}
                    <div className="field col-12 md:col-6">
                        <label htmlFor="currency">Currency</label>
                        <InputText id="currency" type="text" value={formData.currency} onChange={(e) => handleChange(e)} name="currency" />
                    </div>

                    {/* Items */}
                    <div className="field  col-12 md:col-12">
                        <h3>Items:</h3>
                        <Button label="Add Item"  onClick={handleAddItem} />
                    </div>


                        {formData.items.map((item, index) => (
                            <div key={index}  className="card grid col-12 md:col-5 m-4">
                                <div className="field col-12 md:col-12 pt-5">
                                    <label htmlFor={`name${index}`}>Name</label>
                                    <InputText id={`name${index}`} type="text" value={item.name} onChange={(e) => handleChange(e, index)} name="name" />
                                </div>
                                <div className="field col-12 md:col-6">
                                    <label htmlFor={`price${index}`}>Price</label>
                                    <InputText id={`price${index}`} type="number" value={item.price} onChange={(e) => handleChange(e, index)} name="price" />
                                </div>
                                <div className="field col-12 md:col-6">
                                    <label htmlFor={`quantity${index}`}>Quantity</label>
                                    <InputText id={`quantity${index}`} type="number" value={item.quantity} onChange={(e) => handleChange(e, index)} name="quantity" />
                                </div>
                                <div className="field col-12 md:col-12">
                                    <label htmlFor={`material${index}`}>Material</label>
                                    <InputText id={`material${index}`} type="text" value={item.material} onChange={(e) => handleChange(e, index)} name="material" />
                                </div>
                                {/* Add other item fields similar to the above */}
                            </div>
                        ))}

                    

                    {/* Delivery Address */}
                    <div className="field">
                        <label htmlFor="deliveryAddress">Delivery Address</label>
                        <InputTextarea id="deliveryAddress" rows={4} value={formData.deliveryAddress} onChange={(e) => handleChange(e)} name="deliveryAddress" />
                    </div>

                    {/* Submit button */}
                    <Button label="Submit" onClick={handleSubmit} />
                    </div>
                </div>
            </div>

            {/* Display form data (for debugging) */}
            <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default CreatePO;

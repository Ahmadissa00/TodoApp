import {  useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
import { createTodo, retrieveTodoById, updateTodoById } from "./api/Todosapi";
import { useEffect, useState } from "react";
import { Field, Formik, Form, ErrorMessage} from "formik";
import moment from "moment";

export default function TodoComponent(){

    const {id} = useParams();

    const authContext = useAuth();
    const username = authContext.username;

    const navigate = useNavigate();

    const [description, setDescription] = useState('');
    const [targetDate, setTargetDate] = useState('');

    useEffect(() =>
            retrieveTodos()
        , [id]);

    function retrieveTodos() {
        retrieveTodoById(username, id)
            .then(response => {
                setDescription(response.data.descrption);
                setTargetDate(response.data.date);
            })
            .catch(error => console.log(error));
    }

    function onSubmit(values) {
        console.log(values);
        const todo = {
            id: id,
            descrption: values.description,
            done: false,
            username: username,
            date: values.targetDate,
            
        };
        if (id == -1) {
            createTodo(username, todo)
                .then(response => {
                    console.log(response.data);
                    navigate('/todos');
                })
                .catch(error => console.log(error));}
        else{
        updateTodoById(username, id, todo)
        .then(response => {
            console.log(response.data);
            navigate('/todos');
            
                
            })
            .catch(error => console.log(error));}
    }

    function validate(values) {
        let errors = {};

        if (values.description.length < 5) {
            errors.description = 'Description must be at least 5 characters';
        }
        if (!values.targetDate) {
            errors.targetDate = 'Target Date is required';
        } else if (moment(values.targetDate).isBefore(moment())) {
            errors.targetDate = 'Target Date cannot be in the past';
        }
        return errors;
    }

    

    return (
        <div className="container">
            <h1>Todo Component</h1>
            <div>
                <Formik initialValues={{description, targetDate}} 
                            enableReinitialize={true}
                            onSubmit={onSubmit}
                            validate={validate}
                            validateOnChange={false}
                            validateOnBlur={false}>
                                
               
                    {
                    (props) =>(
                    <Form>
                        <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                        <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>   
                        <fieldset className="form-group">
                            <label>Description</label>
                            <Field className="form-control" type="text" name="description"/>
                        </fieldset>
                        <fieldset className="form-group">
                            <label>Target Date</label>
                            <Field className="form-control" type="date" name="targetDate"/>
                        </fieldset>
                        <button className="btn btn-success m-5" type="submit">Save</button>
                    </Form>
                    )
                    }
                </Formik>
            </div>
        </div>
    );
}
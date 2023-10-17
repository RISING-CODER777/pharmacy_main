"use client"
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../authentication/firebase";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

// Your imports...

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
`;

const CardTitle = styled.h5`
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const CardText = styled.p`
  font-size: 1rem;
`;

const PreviousPurchases = () => {
  const [stays, setStays] = useState<{ id: string; userid: string; price: number; productName: string; timestamp: string }[]>([]);
  let uid: string | null;

  useEffect(() => {
    let unsubscribe: () => void; // Define unsubscribe function

    const authUnsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        uid = user.uid;
        const q = query(collection(db, "checkout"), where("userid", "==", uid));
        unsubscribe = onSnapshot(q, (querySnapshot) => {
          const newStays = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            userid: doc.data().userid,
            price: doc.data().price,
            productName: doc.data().productName,
            timestamp: doc.data().timestamp, // Add timestamp
          }));

          // Filter out duplicates based on product ID and timestamp
          const filteredStays = newStays.filter((newStay) => {
            return stays.every((oldStay) => {
              return newStay.id !== oldStay.id || newStay.timestamp !== oldStay.timestamp;
            });
          });

          setStays([...stays, ...filteredStays]);
        });
      } else {
        uid = null;
      }
    });

    return () => {
      authUnsubscribe(); // Cleanup auth observer
      if (unsubscribe) unsubscribe(); // Cleanup Firestore query observer
    };
  }, [stays]); // Include stays in the dependency array

  return (
    <div className="container mt-4">
      <div className="row">
        {stays.map((p) => (
          <div key={p.id} className="col-md-4 mb-4">
            <Card>
              <div className="card-body">
                <CardTitle>
                  <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px' }} />
                  User ID
                </CardTitle>
                <CardText>{p.userid}</CardText>
                <CardTitle>
                  <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '8px' }} />
                  Product Name
                </CardTitle>
                <CardText>{p.productName}</CardText>
                <CardTitle>
                  <FontAwesomeIcon icon={faMoneyBill} style={{ marginRight: '8px' }} />
                  Price
                </CardTitle>
                <CardText>{p.price}</CardText>
                <CardTitle>
                  <FontAwesomeIcon icon={faMoneyBill} style={{ marginRight: '8px' }} />
                  Timestamp
                </CardTitle>
                <CardText>{p.timestamp}</CardText>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousPurchases;

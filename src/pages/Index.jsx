import React, { useState } from "react";
import { Container, VStack, HStack, Text, Button, Input, FormControl, FormLabel, Select, useToast, Box, IconButton, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const Index = () => {
  const [documents, setDocuments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [payments, setPayments] = useState([]);
  const [newDocument, setNewDocument] = useState("");
  const [newOrder, setNewOrder] = useState("");
  const [newPayment, setNewPayment] = useState("");
  const toast = useToast();

  const handleAddDocument = () => {
    if (newDocument) {
      setDocuments([...documents, newDocument]);
      setNewDocument("");
      toast({ title: "Document added.", status: "success", duration: 2000, isClosable: true });
    }
  };

  const handleAddOrder = () => {
    if (newOrder) {
      setOrders([...orders, newOrder]);
      setNewOrder("");
      toast({ title: "Order added.", status: "success", duration: 2000, isClosable: true });
    }
  };

  const handleAddPayment = () => {
    if (newPayment) {
      setPayments([...payments, newPayment]);
      setNewPayment("");
      toast({ title: "Payment added.", status: "success", duration: 2000, isClosable: true });
    }
  };

  const handleDelete = (type, index) => {
    if (type === "document") {
      setDocuments(documents.filter((_, i) => i !== index));
      toast({ title: "Document deleted.", status: "info", duration: 2000, isClosable: true });
    } else if (type === "order") {
      setOrders(orders.filter((_, i) => i !== index));
      toast({ title: "Order deleted.", status: "info", duration: 2000, isClosable: true });
    } else if (type === "payment") {
      setPayments(payments.filter((_, i) => i !== index));
      toast({ title: "Payment deleted.", status: "info", duration: 2000, isClosable: true });
    }
  };

  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Enterprise Contract Management System
        </Text>

        <Box width="100%">
          <Text fontSize="2xl" mb={4}>
            Documents
          </Text>
          <HStack mb={4}>
            <Input placeholder="New Document" value={newDocument} onChange={(e) => setNewDocument(e.target.value)} />
            <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddDocument}>
              Add Document
            </Button>
          </HStack>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Document</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {documents.map((doc, index) => (
                <Tr key={index}>
                  <Td>{doc}</Td>
                  <Td>
                    <IconButton aria-label="Edit" icon={<FaEdit />} mr={2} />
                    <IconButton aria-label="Delete" icon={<FaTrash />} colorScheme="red" onClick={() => handleDelete("document", index)} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Box width="100%">
          <Text fontSize="2xl" mb={4}>
            Orders
          </Text>
          <HStack mb={4}>
            <Input placeholder="New Order" value={newOrder} onChange={(e) => setNewOrder(e.target.value)} />
            <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddOrder}>
              Add Order
            </Button>
          </HStack>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Order</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {orders.map((order, index) => (
                <Tr key={index}>
                  <Td>{order}</Td>
                  <Td>
                    <IconButton aria-label="Edit" icon={<FaEdit />} mr={2} />
                    <IconButton aria-label="Delete" icon={<FaTrash />} colorScheme="red" onClick={() => handleDelete("order", index)} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Box width="100%">
          <Text fontSize="2xl" mb={4}>
            Payments
          </Text>
          <HStack mb={4}>
            <Input placeholder="New Payment" value={newPayment} onChange={(e) => setNewPayment(e.target.value)} />
            <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddPayment}>
              Add Payment
            </Button>
          </HStack>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Payment</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {payments.map((payment, index) => (
                <Tr key={index}>
                  <Td>{payment}</Td>
                  <Td>
                    <IconButton aria-label="Edit" icon={<FaEdit />} mr={2} />
                    <IconButton aria-label="Delete" icon={<FaTrash />} colorScheme="red" onClick={() => handleDelete("payment", index)} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;

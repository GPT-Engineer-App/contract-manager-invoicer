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
      toast({ title: "ドキュメントが追加されました。", status: "success", duration: 2000, isClosable: true });
    }
  };

  const handleAddOrder = () => {
    if (newOrder) {
      setOrders([...orders, newOrder]);
      setNewOrder("");
      toast({ title: "注文が追加されました。", status: "success", duration: 2000, isClosable: true });
    }
  };

  const handleAddPayment = () => {
    if (newPayment) {
      setPayments([...payments, newPayment]);
      setNewPayment("");
      toast({ title: "支払いが追加されました。", status: "success", duration: 2000, isClosable: true });
    }
  };

  const handleDelete = (type, index) => {
    if (type === "document") {
      setDocuments(documents.filter((_, i) => i !== index));
      toast({ title: "ドキュメントが削除されました。", status: "info", duration: 2000, isClosable: true });
    } else if (type === "order") {
      setOrders(orders.filter((_, i) => i !== index));
      toast({ title: "注文が削除されました。", status: "info", duration: 2000, isClosable: true });
    } else if (type === "payment") {
      setPayments(payments.filter((_, i) => i !== index));
      toast({ title: "支払いが削除されました。", status: "info", duration: 2000, isClosable: true });
    }
  };

  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          企業契約管理システム
        </Text>

        <Box width="100%">
          <Text fontSize="2xl" mb={4}>
            ドキュメント
          </Text>
          <HStack mb={4}>
            <Input placeholder="新しいドキュメント" value={newDocument} onChange={(e) => setNewDocument(e.target.value)} />
            <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddDocument}>
              ドキュメントを追加
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
            注文
          </Text>
          <HStack mb={4}>
            <Input placeholder="新しい注文" value={newOrder} onChange={(e) => setNewOrder(e.target.value)} />
            <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddOrder}>
              注文を追加
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
            支払い
          </Text>
          <HStack mb={4}>
            <Input placeholder="新しい支払い" value={newPayment} onChange={(e) => setNewPayment(e.target.value)} />
            <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddPayment}>
              支払いを追加
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

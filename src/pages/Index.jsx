import { Box, Button, Container, Divider, Flex, Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaPhone, FaRegStar, FaStar, FaUserTie } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  // In a real-world app, you would manage the active page with a router
  // Here we'll use a simple state to simulate page changes
  const [activePage, setActivePage] = useState("home");

  // Helper to switch pages
  const navigate = (page) => setActivePage(page);

  // Home page component
  const HomePage = () => (
    <VStack spacing={6}>
      <Heading as="h1" size="2xl" textAlign="center">
        Exteritor Home Cleaning
      </Heading>
      <Image src="https://images.unsplash.com/photo-1513694203232-719a280e022f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGhvdXNlJTIwZXh0ZXJpb3J8ZW58MHx8fHwxNzA5NjA5MjM3fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" alt="Clean House Exterior" />
      <Text fontSize="xl">Welcome to Exteritor, your professional home cleaning service. We ensure your home shines inside out!</Text>
      <Button colorScheme="blue" onClick={() => navigate("services")}>
        Explore Services
      </Button>
    </VStack>
  );

  // Services page component
  const ServicesPage = () => (
    <VStack spacing={6}>
      <Heading as="h2" size="lg">
        Our Services
      </Heading>
      <Divider />
      <Stack spacing={4} width="100%">
        <ServiceItem title="Exterior Washing" description="Complete exterior wash for a sparkling look." />
        <ServiceItem title="Window Cleaning" description="Streak-free window cleaning for a clearer view." />
        <ServiceItem title="Gutter Cleaning" description="Thorough gutter cleaning to prevent blockages." />
        <ServiceItem title="Patio & Deck Washing" description="Professional washing for patios and decks." />
      </Stack>
      <Button colorScheme="green" onClick={() => navigate("home")}>
        Back to Home
      </Button>
    </VStack>
  );

  // Contact us page component
  const ContactUsPage = () => (
    <VStack spacing={6}>
      <Heading as="h2" size="lg">
        Contact Us
      </Heading>
      <Divider />
      <Text fontSize="xl">Have any questions or want to book a service? Reach out to us!</Text>
      <Flex alignItems="center">
        <FaPhone />
        <Text marginLeft={2}>+1 (800) 123-4567</Text>
      </Flex>
      <Button colorScheme="teal" onClick={() => navigate("home")}>
        Back to Home
      </Button>
    </VStack>
  );

  // Before and after/reviews page component
  const BeforeAfterReviewsPage = () => (
    <VStack spacing={6}>
      <Heading as="h2" size="lg">
        Before & After / Reviews
      </Heading>
      <Divider />
      <Stack spacing={4} width="100%">
        <ReviewItem author="Jane Doe" content="Exteritor transformed the look of my home! Highly recommend their services." rating={5} />
        <ReviewItem author="John Smith" content="Impressed by the before and after results. My deck looks brand new." rating={4} />
        {/* Add more reviews as needed */}
      </Stack>
      <Button colorScheme="purple" onClick={() => navigate("home")}>
        Back to Home
      </Button>
    </VStack>
  );

  // Service item component
  const ServiceItem = ({ title, description }) => (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{description}</Text>
    </Box>
  );

  // Review item component
  const ReviewItem = ({ author, content, rating }) => (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
      <Flex justifyContent="space-between">
        <Heading fontSize="lg">{author}</Heading>
        <Box>{[...Array(5)].map((_, i) => (i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />))}</Box>
      </Flex>
      <Text mt={4}>{content}</Text>
    </Box>
  );

  // Navigation bar component
  const Navbar = () => (
    <Flex as="nav" justifyContent="space-between" padding={4}>
      <Link as="button" onClick={() => navigate("home")}>
        Home
      </Link>
      <Link as="button" onClick={() => navigate("services")}>
        Services
      </Link>
      <Link as="button" onClick={() => navigate("contact")}>
        Contact Us
      </Link>
      <Link as="button" onClick={() => navigate("reviews")}>
        Before & After / Reviews
      </Link>
    </Flex>
  );

  return (
    <Container maxW="container.md" py={10}>
      <Navbar />
      {activePage === "home" && <HomePage />}
      {activePage === "services" && <ServicesPage />}
      {activePage === "contact" && <ContactUsPage />}
      {activePage === "reviews" && <BeforeAfterReviewsPage />}
    </Container>
  );
};

export default Index;

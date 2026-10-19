import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Star, ShoppingCart, Clock, Zap, Dumbbell, Bell, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// ============================================
// GOOGLE FORMS INTEGRATION PLACEHOLDERS
// ============================================
// Replace these URLs with your actual Google Form URLs:
// 1. Create a Google Form for orders
// 2. Create a Google Form for newsletter signups
// 3. Get the form's pre-filled link or embed URL
// 
// ORDER FORM: Create with fields - Name, Phone, Email, City, Product, Quantity, Message
// NEWSLETTER FORM: Create with fields - Email, Product Interest
// ============================================
const GOOGLE_FORM_ORDER_URL = "YOUR_GOOGLE_FORM_ORDER_URL_HERE";
const GOOGLE_FORM_NEWSLETTER_URL = "YOUR_GOOGLE_FORM_NEWSLETTER_URL_HERE";
const ORDER_EMAIL = "vishalfitness0105@gmail.com";

const proteins = [
  {
    id: 1,
    name: "Optimum Nutrition Gold Standard Whey",
    brand: "Optimum Nutrition",
    price: "₹4,999",
    rating: 4.9,
    reviews: 12500,
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop&auto=format",
    flavor: "Double Rich Chocolate",
    size: "2.27 kg",
    bestFor: "Muscle Building",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "MuscleBlaze Biozyme Whey Protein",
    brand: "MuscleBlaze",
    price: "₹4,499",
    rating: 4.7,
    reviews: 8900,
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop&auto=format",
    flavor: "Rich Chocolate",
    size: "2 kg",
    bestFor: "Enhanced Absorption",
    tag: "Popular"
  },
  {
    id: 3,
    name: "Dymatize ISO 100",
    brand: "Dymatize",
    price: "₹6,999",
    rating: 4.8,
    reviews: 6700,
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&h=400&fit=crop&auto=format",
    flavor: "Gourmet Vanilla",
    size: "2.3 kg",
    bestFor: "Fast Absorption",
    tag: "Premium"
  },
  {
    id: 4,
    name: "MyProtein Impact Whey Isolate",
    brand: "MyProtein",
    price: "₹3,999",
    rating: 4.6,
    reviews: 5400,
    image: "https://images.unsplash.com/photo-1622467827417-bbe6d503d3e4?w=400&h=400&fit=crop&auto=format",
    flavor: "Salted Caramel",
    size: "2.5 kg",
    bestFor: "Value for Money",
    tag: "Budget Pick"
  },
  {
    id: 5,
    name: "MuscleTech Nitro-Tech",
    brand: "MuscleTech",
    price: "₹5,499",
    rating: 4.7,
    reviews: 7200,
    image: "https://images.unsplash.com/photo-1612532275378-2c6a8a07a928?w=400&h=400&fit=crop&auto=format",
    flavor: "Milk Chocolate",
    size: "1.8 kg",
    bestFor: "Lean Muscle",
    tag: "Top Rated"
  },
  {
    id: 6,
    name: "BSN Syntha-6",
    brand: "BSN",
    price: "₹4,299",
    rating: 4.5,
    reviews: 4800,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&auto=format",
    flavor: "Chocolate Milkshake",
    size: "2.27 kg",
    bestFor: "Sustained Release",
    tag: "Tasty"
  }
];

const creatines = [
  {
    id: 1,
    name: "Optimum Nutrition Micronized Creatine",
    brand: "Optimum Nutrition",
    price: "₹1,499",
    rating: 4.9,
    reviews: 9800,
    image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=400&h=400&fit=crop&auto=format",
    type: "Monohydrate",
    size: "300g",
    servings: "60 Servings",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "MuscleTech Platinum Creatine",
    brand: "MuscleTech",
    price: "₹1,299",
    rating: 4.7,
    reviews: 6500,
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=400&h=400&fit=crop&auto=format",
    type: "Monohydrate",
    size: "400g",
    servings: "80 Servings",
    tag: "Value Pack"
  },
  {
    id: 3,
    name: "MuscleBlaze Creatine Monohydrate",
    brand: "MuscleBlaze",
    price: "₹899",
    rating: 4.6,
    reviews: 7200,
    image: "https://images.unsplash.com/photo-1584116831289-e53912463c35?w=400&h=400&fit=crop&auto=format",
    type: "Monohydrate",
    size: "250g",
    servings: "50 Servings",
    tag: "Budget Pick"
  },
  {
    id: 4,
    name: "Dymatize Creatine Micronized",
    brand: "Dymatize",
    price: "₹1,699",
    rating: 4.8,
    reviews: 4300,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop&auto=format",
    type: "Micronized",
    size: "500g",
    servings: "100 Servings",
    tag: "Premium"
  },
  {
    id: 5,
    name: "MyProtein Creatine Monohydrate",
    brand: "MyProtein",
    price: "₹799",
    rating: 4.5,
    reviews: 5100,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop&auto=format",
    type: "Monohydrate",
    size: "250g",
    servings: "50 Servings",
    tag: "Popular"
  },
  {
    id: 6,
    name: "GAT Sport Creatine",
    brand: "GAT Sport",
    price: "₹1,199",
    rating: 4.4,
    reviews: 3200,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop&auto=format",
    type: "Monohydrate",
    size: "300g",
    servings: "60 Servings",
    tag: "Trusted"
  }
];

const upcomingProducts = [
  {
    id: 1,
    name: "VF Premium Whey Isolate",
    tagline: "By Vishal Fitness",
    description: "Our signature protein blend crafted for Indian athletes. Enhanced absorption with authentic Indian flavors like Kesar Pista and Mango Lassi.",
    launchDate: "Launching Soon",
    features: ["90% Pure Protein", "Zero Added Sugar", "Indian Flavors", "Lab Tested"]
  },
  {
    id: 2,
    name: "VF Creatine HCL",
    tagline: "By Vishal Fitness",
    description: "Next-generation creatine with superior solubility. No bloating, no loading phase required - just pure performance gains.",
    launchDate: "Launching Soon",
    features: ["No Loading Phase", "Zero Bloating", "Fast Absorption", "Micronized Formula"]
  },
  {
    id: 3,
    name: "VF Pre-Workout Ignite",
    tagline: "By Vishal Fitness",
    description: "Explosive energy and laser focus for your most intense training sessions. Clinically dosed ingredients for real results.",
    launchDate: "Launching Soon",
    features: ["300mg Caffeine", "6g Citrulline", "Beta Alanine", "No Crash Formula"]
  }
];

interface ProductType {
  id: number;
  name: string;
  brand: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  flavor?: string;
  type?: string;
  size: string;
  bestFor?: string;
  servings?: string;
  tag: string;
}

const ProductCard = ({ 
  product, 
  type,
  onBuyClick 
}: { 
  product: ProductType; 
  type: "protein" | "creatine";
  onBuyClick: (product: ProductType) => void;
}) => (
  <Card className="group bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
    <CardHeader className="p-0 relative overflow-hidden">
      <div className="aspect-square bg-white relative flex items-center justify-center p-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
          {product.tag}
        </Badge>
      </div>
    </CardHeader>
    <CardContent className="p-4 space-y-3">
      <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.brand}</p>
      <CardTitle className="text-lg leading-tight line-clamp-2">{product.name}</CardTitle>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-accent text-accent" />
          <span className="text-sm font-medium">{product.rating}</span>
        </div>
        <span className="text-xs text-muted-foreground">({product.reviews.toLocaleString()} reviews)</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary" className="text-xs">
          {type === "protein" ? product.flavor : product.type}
        </Badge>
        <Badge variant="secondary" className="text-xs">{product.size}</Badge>
        <Badge variant="outline" className="text-xs">
          {type === "protein" ? product.bestFor : product.servings}
        </Badge>
      </div>
    </CardContent>
    <CardFooter className="p-4 pt-0 flex items-center justify-between">
      <span className="text-xl font-bold text-primary">{product.price}</span>
      <Button size="sm" variant="accent" className="gap-2" onClick={() => onBuyClick(product)}>
        <ShoppingCart className="w-4 h-4" />
        Buy Now
      </Button>
    </CardFooter>
  </Card>
);

const UpcomingCard = ({ product }: { product: any }) => (
  <Card className="bg-gradient-to-br from-card via-card to-primary/5 border-primary/30 overflow-hidden group relative">
    <div className="absolute top-4 right-4">
      <Badge className="bg-accent text-accent-foreground font-bold">
        VISHAL FITNESS
      </Badge>
    </div>
    <CardContent className="p-6 md:p-8">
      <Badge variant="outline" className="mb-4 border-accent text-accent">
        <Clock className="w-3 h-3 mr-1" />
        {product.launchDate}
      </Badge>
      <CardTitle className="text-2xl md:text-3xl mb-2 font-heading">{product.name}</CardTitle>
      <p className="text-sm text-primary mb-3">{product.tagline}</p>
      <p className="text-muted-foreground mb-6">{product.description}</p>
      <div className="flex flex-wrap gap-2">
        {product.features.map((feature: string, idx: number) => (
          <Badge key={idx} className="bg-primary/20 text-primary border-0">
            <Zap className="w-3 h-3 mr-1" />
            {feature}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    quantity: "1",
    message: ""
  });
  const { toast } = useToast();

  const handleBuyClick = (product: ProductType) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body for order
    const emailSubject = `Order Inquiry: ${selectedProduct?.name}`;
    const emailBody = `Hi Vishal!

I want to place an order:

PRODUCT DETAILS:
- Product: ${selectedProduct?.name}
- Brand: ${selectedProduct?.brand}
- Price: ${selectedProduct?.price}
- Quantity: ${formData.quantity}

MY DETAILS:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email}
- City: ${formData.city}

${formData.message ? `Additional Message: ${formData.message}` : ""}

Looking forward to your response!`;

    // Open email client
    const mailtoLink = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Email Client",
      description: "Your order details are ready to send. Vishal will get back to you soon!",
    });
    
    setIsDialogOpen(false);
    setFormData({ name: "", phone: "", email: "", city: "", quantity: "1", message: "" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newsletterEmail) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }

    // Open email with newsletter signup
    const emailSubject = "Newsletter Signup - VF Products Launch";
    const emailBody = `Hi Vishal!

Please add me to the Vishal Fitness Products launch notification list.

Email: ${newsletterEmail}

I want to be notified when VF branded supplements launch!`;

    const mailtoLink = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    toast({
      title: "You're Almost There!",
      description: "Send the email to complete your newsletter signup.",
    });
    
    setNewsletterEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
          <div className="container-custom px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                <Dumbbell className="w-3 h-3 mr-1" />
                Recommended by Vishal Fitness
              </Badge>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                Premium <span className="text-primary">Supplements</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Hand-picked proteins and creatines that I personally recommend for maximum results. 
                Quality supplements for your transformation journey.
              </p>
            </div>
          </div>
        </section>

        {/* Products Tabs */}
        <section className="py-16 md:py-24">
          <div className="container-custom px-4">
            <Tabs defaultValue="proteins" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
                <TabsTrigger value="proteins" className="text-base">Whey Proteins</TabsTrigger>
                <TabsTrigger value="creatines" className="text-base">Creatines</TabsTrigger>
              </TabsList>
              
              <TabsContent value="proteins">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {proteins.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      type="protein" 
                      onBuyClick={handleBuyClick}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="creatines">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {creatines.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      type="creatine" 
                      onBuyClick={handleBuyClick}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Upcoming Products - Vishal Fitness Brand Only */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-steel/30 to-background">
          <div className="container-custom px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent text-accent-foreground">
                <Zap className="w-3 h-3 mr-1" />
                Our Own Brand
              </Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-black mb-4">
                <span className="text-primary">Vishal Fitness</span> Products
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're launching our own supplement line! Premium quality products crafted specifically 
                for Indian athletes. Be the first to know when they drop.
              </p>
            </div>
            
            {/* Newsletter Signup Form */}
            <Card className="max-w-2xl mx-auto mb-12 bg-gradient-to-r from-primary/20 via-card to-accent/20 border-primary/30">
              <CardContent className="p-6 md:p-8">
                <div className="text-center mb-6">
                  <Bell className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold mb-2">Get Launch Notifications</h3>
                  <p className="text-muted-foreground">
                    Be the first to know when our VF supplements launch. Get exclusive early-bird discounts!
                  </p>
                </div>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="h-12 bg-background/50"
                      required
                    />
                  </div>
                  <Button type="submit" variant="accent" size="lg" className="gap-2">
                    <Send className="w-4 h-4" />
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  No spam, only launch updates. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {upcomingProducts.map((product) => (
                <UpcomingCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Buy Now Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-heading">Order Inquiry</DialogTitle>
            <DialogDescription>
              Fill in your details and send your order via email. We'll get back to you shortly!
            </DialogDescription>
          </DialogHeader>
          
          {selectedProduct && (
            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg mb-4">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name}
                className="w-16 h-16 object-contain bg-white rounded"
              />
              <div className="flex-1">
                <p className="font-medium line-clamp-1">{selectedProduct.name}</p>
                <p className="text-sm text-muted-foreground">{selectedProduct.brand}</p>
                <p className="text-lg font-bold text-primary">{selectedProduct.price}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone / WhatsApp *</Label>
                <Input 
                  id="phone" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input 
                  id="city" 
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  placeholder="Your city"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input 
                id="quantity" 
                type="number"
                min="1"
                value={formData.quantity}
                onChange={(e) => setFormData({...formData, quantity: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Message (Optional)</Label>
              <Textarea 
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Any specific requirements or questions?"
                rows={3}
              />
            </div>

            <Button type="submit" variant="accent" className="w-full gap-2">
              <Mail className="w-4 h-4" />
              Send Order via Email
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Your email client will open with order details pre-filled
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";
export default function App({ Component, pageProps }) {
  const Router = useRouter();
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    Router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  });
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
        saveCart(JSON.parse(storedCart));
      }
    } catch (e) {
      localStorage.clear();
    }
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ value: token });
      setKey(Math.random());
    }
  }, [Router.query]);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));

    const total = Object.values(myCart).reduce((acc, item) => {
      return acc + item.price * item.qty;
    }, 0);

    setSubTotal(total);
  };

  const addToCart = (itemCode, qty = 1, price, name, size, variant) => {
    const newCart = { ...cart };

    if (itemCode in newCart) {
      newCart[itemCode].qty += qty;
    } else {
      newCart[itemCode] = {
        qty,
        price,
        name,
        size,
        variant,
      };
    }

    setCart(newCart);
    saveCart(newCart);
  };

  const removeFromCart = (itemCode, qty = 1, price, name, size, variant) => {
    const newCart = { ...cart };

    if (itemCode in newCart) {
      newCart[itemCode].qty -= qty;
      if (newCart[itemCode].qty <= 0) {
        delete newCart[itemCode];
      }
    }

    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const buyNow = (itemCode, qty = 1, price, name, size, variant) => {
    const newCart = {
      [itemCode]: {
        qty,
        price,
        name,
        size,
        variant,
      },
    };

    setCart(newCart);
    saveCart(newCart);
    Router.push("/checkout");
  };

  const logout = () => {
    let tok = localStorage.getItem("token");
    if (tok) {
      localStorage.removeItem("token");
      setUser({ value: null });
      setKey(Math.random());
      toast.success(`Logout Successfully`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        Router.push("/").then(() => window.location.reload());
      }, 1000);
    }
  };
  return (
    <>
      <LoadingBar
        color="#ec489a"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={500}
      />
      <Navbar
        Logout={logout}
        user={user}
        key={key}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
      />
      <Component
        buyNow={buyNow}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

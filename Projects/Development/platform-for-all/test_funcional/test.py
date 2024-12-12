import unittest
from HtmlTestRunner import HTMLTestRunner
import time
import requests
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

class TestFlaskApp(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        service = Service("./chromedriver.exe") 
        cls.driver = webdriver.Chrome(service=service)
        cls.url = "http://localhost:5173"  
        for _ in range(10): 
            try:
                requests.get(cls.url)
                break
            except requests.ConnectionError:
                time.sleep(1)
        else:
            raise RuntimeError("El servidor no está disponible.")

        cls.driver.get(cls.url) 

    def test01_login(self):
        driver = self.driver

        try:
            start_button = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.LINK_TEXT, "Iniciar Sesión"))
            )
            start_button.click()

            WebDriverWait(driver, 10).until(EC.url_contains("/login"))
        except TimeoutException:
            self.fail("No se pudo navegar a la página de login")
        valid_users = [
            {"username": "user1", "password": "password123"},
            {"username": "user2", "password": "password456"},
            {"username": "carlos", "password": "2345"},
            {"username": "@@3fgA", "password": "$%##"},
            {"username": "", "password": ""},
            {"username": "ana", "password": ""},
            {"username": "", "password": "123"},
        ]

        for user in valid_users:
            with self.subTest(user=user):
                try:
                    username_input = WebDriverWait(driver, 10).until(
                        EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Usuario']"))
                    )
                    password_input = driver.find_element(By.XPATH, "//input[@placeholder='Contraseña']")
                    submit_button = driver.find_element(By.CLASS_NAME, "button-submit")

                    username_input.clear()
                    username_input.send_keys(user["username"])
                    password_input.clear()
                    password_input.send_keys(user["password"])

                    submit_button.click()
                    WebDriverWait(driver, 10).until(EC.url_contains("/home"))
                    print(f"Prueba exitosa para {user['username']}: Navegó a /home")

                    driver.get(self.url)
                    start_button = WebDriverWait(driver, 10).until(
                        EC.element_to_be_clickable((By.LINK_TEXT, "Iniciar Sesión"))
                    )
                    start_button.click()
                    WebDriverWait(driver, 5).until(EC.url_contains("/login"))
                except TimeoutException:
                    try:
                        error_message = WebDriverWait(driver, 5).until(
                            EC.presence_of_element_located((By.CLASS_NAME, "error-message"))
                        )
                        print(f"Prueba fallida para {user['username']}: {error_message.text}")
                    except TimeoutException:
                        print(f"Prueba fallida para {user['username']}: No se encontró el mensaje de error")

                    driver.refresh()
                    WebDriverWait(driver, 5).until(EC.url_contains("/login"))
                except Exception as e:
                    print(f"Error inesperado para {user['username']}: {e}")
                    WebDriverWait(driver, 5).until(EC.url_contains("/login"))

    def test02_register(self):
        self.driver.get(self.url)
        driver = self.driver

        test_users = [
            {
                "nombre_completo": f"Usuario Prueba {i}",
                "usuario": f"testuser{i}",
                "correo": f"testuser{i}@example.com",
                "contraseña": "Password123",
                "confirmar_contraseña": "Password123"
            } for i in range(1, 11)
        ]

        try:
            start_button = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.LINK_TEXT, "Iniciar Sesión"))
            )
            start_button.click()

            WebDriverWait(driver, 10).until(EC.url_contains("/login"))
            register_link = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, "//span[text()='Registrar']"))
            )
            register_link.click()
            WebDriverWait(driver, 10).until(EC.url_contains("/register"))
            for user in test_users:
                try:
                    
                    WebDriverWait(driver, 10).until(
                        EC.presence_of_element_located((By.CLASS_NAME, "formulario"))
                    )
                    driver.find_element(By.XPATH, "//input[@placeholder='Max Bruno Saavedra Monterrey']").send_keys(
                        user["nombre_completo"]
                    )
                    driver.find_element(By.XPATH, "//input[@placeholder='Maxbr']").send_keys(user["usuario"])
                    driver.find_element(By.XPATH, "//input[@placeholder='name@example.com']").send_keys(user["correo"])
                    driver.find_element(By.XPATH, "//input[@placeholder='Contraseña']").send_keys(user["contraseña"])
                    driver.find_element(By.XPATH, "//input[@placeholder='Confirmar Contraseña']").send_keys(
                        user["confirmar_contraseña"]
                    )
                    driver.find_element(By.CLASS_NAME, "button-submit").click()
                    print(f"Prueba exitosa para {user['usuario']}: Navegó a /register")
                    WebDriverWait(driver, 10).until(EC.url_contains("/register"))

                except TimeoutException:
                    self.fail(f"No se pudo registrar el usuario: {user['usuario']}")
            
        except TimeoutException:
            self.fail("No se pudo navegar a la página de registro")

    def test3_home(self):
        self.driver.get(self.url)
        driver = self.driver       
        start_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.LINK_TEXT, "Iniciar Sesión"))
        )
        start_button.click()
        WebDriverWait(driver, 10).until(EC.url_contains("/login"))
        
        username_field = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, ".control-login[type='text']"))
        )
        password_field = driver.find_element(By.CSS_SELECTOR, ".control-login[type='password']")
        submit_button = driver.find_element(By.CSS_SELECTOR, ".button-submit")

        username_field.send_keys("user2")  
        password_field.send_keys("password456") 
        submit_button.click()
        WebDriverWait(driver, 10).until(EC.url_contains("/home"))
        self.assertIn("/home", driver.current_url)

        welcome_message = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, ".welcome-message h1"))
        )
        self.assertIn("Willy y Axel", welcome_message.text)

        buttons = driver.find_elements(By.CSS_SELECTOR, ".home-button")
        self.assertEqual(len(buttons), 4)  

        expected_paths = ["/biblioteca", "/managebooks", "/manageusers", "/forum"]
        for i, path in enumerate(expected_paths):
            button = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.CSS_SELECTOR, f".home-button:nth-child({i + 1})"))
            )
            button.click()

            WebDriverWait(driver, 10).until(EC.url_contains(path))
            self.assertIn(path, driver.current_url)
            
            driver.back()
            WebDriverWait(driver, 10).until(EC.url_contains("/home"))     

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

if __name__ == "__main__":
    unittest.main(
        testRunner=HTMLTestRunner(output="test_reports"),  # Especifica un directorio, no un archivo
        failfast=False,
        buffer=False,
        catchbreak=False,
    )
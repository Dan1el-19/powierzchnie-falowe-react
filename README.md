## Prezentacja jest dostępna pod adresem:
[https://dan1el-19.github.io/powierzchnie-falowe-react/](https://dan1el-19.github.io/powierzchnie-falowe-react/)

Dokumentacja zawiera instrukcję uruchomienia projektu na lokalnym komputerze.

## 1. Wymagane oprogramowanie

Do działania projektu niezbędne jest zainstalowanie środowiska Node.js.

- **Pobieranie:** zalecana jest instalacja wersji LTS (Recommended for Most Users) ze strony: [nodejs.org](https://nodejs.org)
- **Weryfikacja:** w celu sprawdzenia poprawności instalacji należy otworzyć terminal (Wiersz polecenia / PowerShell / Terminal) i wpisać:

```bash
node -v
```

Prawidłowy wynik to numer wersji (np. `v20.10.0`). Jeśli pojawi się błąd, konieczna jest instalacja Node.js i ponowne uruchomienie komputera.

## 2. Instalacja i uruchomienie

Poniższe komendy należy wpisywać w terminalu.

### Krok 1: Pobranie projektu

Jeśli projekt nie został jeszcze pobrany, należy go sklonować lub pobrać jako plik ZIP i rozpakować.

```bash
git clone https://github.com/Dan1el-19/powierzchnie-falowe-react.git
cd powierzchnie-falowe-react
```

### Krok 2: Instalacja bibliotek (zależności)

Przed pierwszym uruchomieniem konieczne jest pobranie wymaganych plików. Należy upewnić się, że terminal jest otwarty w folderze projektu, a następnie wpisać:

```bash
npm install
```

Proces ten może potrwać kilka minut.

### Krok 3: Uruchomienie aplikacji

Aby włączyć projekt w trybie deweloperskim, należy wpisać:

```bash
npm run dev
```

Po chwili w terminalu pojawi się adres lokalny, zazwyczaj: `http://localhost:5173`.

Adres ten należy skopiować i otworzyć w przeglądarce internetowej.

## Rozwiązywanie problemów

Poniżej znajdują się rozwiązania najczęstszych błędów.

### 1) Komunikat „'node' is not recognized” / „nie rozpoznano nazwy polecenia”

Node.js nie został poprawnie zainstalowany. Należy pobrać go ponownie ze strony oficjalnej i zrestartować terminal.

### 2) Błędy uprawnień (EACCES) przy instalacji

- W systemach Windows: uruchomić terminal jako Administrator.
- W systemach macOS/Linux: nie zaleca się używania `sudo`. Warto spróbować ponownie lub sprawdzić uprawnienia do folderu.


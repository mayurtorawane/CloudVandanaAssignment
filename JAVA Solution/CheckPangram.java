import java.util.Scanner;

public class CheckPangram{
     public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a sentence: ");
        String input = scanner.nextLine().toLowerCase(); 

        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }public static boolean isPangram(String input) {
        boolean[] alphabetCheck = new boolean[26];

        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);
            if (Character.isLetter(c)) {
                int index = c - 'a';
                alphabetCheck[index] = true;
            }
        }

        // Check if all alphabet letters have been encountered
        for (boolean letterExists : alphabetCheck) {
            if (!letterExists) {
                return false;
            }
        }

        return true;
    }
}








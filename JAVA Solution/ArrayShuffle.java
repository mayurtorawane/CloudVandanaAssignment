import java.util.Random;

public class ArrayShuffle{
    public static void main(String [] args)
   {
    int [] arr={1,2,3,4,5,6,7};

    // Shuffle the array
    shuffleArray(arr);

      // Print the shuffled array
        for (int num : arr) {
            System.out.print(num + " ");
        }
   }
    public static void shuffleArray(int[] array) {
        int n = array.length;
        Random random = new Random();

        // Iterate through the array from the last element to the first
        for (int i = n - 1; i > 0; i--) {
            // Generate a random index between 0 and i
            int j = random.nextInt(i + 1);

            // Swap array[i] and array[j]
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
}
}
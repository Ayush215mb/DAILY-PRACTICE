//taking an array as input and reversing its elements in the same array.
#include<stdio.h>
int main()
{
    int m;
    printf("Enter the size of Array:");
    scanf("%d",&m);
    int arr[m];
    printf("\nEnter %d elements to add in the array:",m);
    for(int i=0;i<m;i++)
    {
        scanf("%d",&arr[i]);
    }
    int i=0,j=m-1;

    while(i<j)
    {
        int temp= arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
    }
    printf("\nThe reverse of the array will be ");
    for(int j=0;j<m;j++)
    {
        printf("%d ",arr[j]);
    }
}
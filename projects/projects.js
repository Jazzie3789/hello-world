



$('li').on('mouseover', () => {
  $('li').addClass('highlighted')
})
$('li').on('mouseleave', () => {
  $('li').removeClass('highlighted')
})


$('li').on('mouseover', function highlight(){
  $(this).addClass('highlighted')
})
$('li').on('mouseleave', function highlight(){
  $(this).removeClass('highlighted')
})
